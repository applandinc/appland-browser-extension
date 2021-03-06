import Options from "/options/options.js";
import * as utils from '/utils.js';

document.addEventListener('DOMContentLoaded', onLoad, false);

const options = new Options();

function onLoad() {
  const url = (new URL(document.location).searchParams).get('url');
  const req = new XMLHttpRequest();
  req.open('DELETE', `${url}/_appmap/record`);
  req.onload = () => {
    if (req.status === 200) {
      if ( req.response ) {
        saveScenario(JSON.parse(req.response));
      }
    }
    else {
      utils.showXHRError(req, 'Failed fetching recording');
    }
  };
  req.onerror = () => {
    utils.showXHRError(req, 'Network error fetching recording');
  };
  req.send();
}

async function saveScenario(data) {
  const form = document.querySelector('form');
  return options.getAppLandUrl()
    .then((applandUrl) => {
      form.setAttribute('action', `${applandUrl}/scenario_uploads`);
      form.querySelector('input').value = JSON.stringify(data);
      form.submit();
    });
}
