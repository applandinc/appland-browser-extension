# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.1] - 2020-060-29
### Changed 
- Make smallest icon match the manifest entry.

## [0.2.0] - 2020-060-29
### Added
- An Error Log, showing the last 100 errors from `XMLHttpRequest`s. Available from the
  extension settings page.

- An options page to specify the server to target for recording, as well the
  AppLand server for uploading.
  
### Changed
- Removed AppLand URL from the popup.
- Update styling.
- Update URL to start an upload.
- Close the popup when starting or stopping a recording.

## [0.1.0] - 2020-05-28
### Added
- Error handling for XHR failures.
- CHANGELOG
- Explicit host permissions for `http` and `https`.
- 

### Changed
- `homepage_url` now points at https://app.land .
- Add Firefox to Development section of README.

[0.2.0]: https://github.com/applandinc/appland-browser-extension/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/applandinc/appland-browser-extension/releases/tag/v0.1.0
