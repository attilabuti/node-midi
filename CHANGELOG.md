# Change Log
All notable changes to this project will be documented in this file.

### [0.9.6] (2018-05-03)
* Updated dependencies
* Updated devDependencies
* Upgrade RtMidi to 3.0.0
* [#101](https://github.com/justinlatimer/node-midi/pull/101): enabled isPortOpen for both Input and Output ports
* [#121](https://github.com/justinlatimer/node-midi/pull/121): exception handling
* [#125](https://github.com/justinlatimer/node-midi/pull/125): updated examples to es6
* Some other small improvements

### [0.9.3]
* Update NAN version for iojs 2.x support. (Ilkka Myller)

### [0.9.2]
* More NAN use for broader support (nw.js, iojs). (Andrew Morton)

### [0.9.1]
* Use NAN to support node 0.8-0.12. (Andrew Morton)

### [0.9.0]
* Avoid fatal error closing unopened port. (Andrew Morton)
* Upgraded RtMidi to 2.1.0. (Hugo Hromic)
* Fixed compile warnings on Windows. (Hugo Hromic)

### [0.8.1]
* Fixing crash when `new` is omitted. (Andrew Morton)

### [0.8.0]
* Update RtMidi to latest upstream. (Andrew Morton)
* Added missing MIDI Clock event case. (Hugo Hromic)
* Upgraded RtMidi library to version 2.0.1. (Hugo Hromic)

### [0.7.1]
* Remove unmatched uv_unref() causing segfault. (Andrew Morton)

### [0.7.0]
* Add readable/writable stream support. (Elijah Insua)

### [0.6.0]
* Upgrade build system to node-gyp bringing Windows support. (Michael Alyn Miller)
* Fix an overzealous delete.

### [0.5.0]
* Switch from using libev to libuv. (Luc Deschenaux)
* Check a port number is valid before trying to open it. (Luc Deschenaux)
* Remove support for node versions < 0.6.0.
* Code and build system improvements with new supported node versions.
* Update documentation.

### [0.4.0]
* Upgrade RtMidi to 1.0.15. (Luc Deschenaux)
* Refactor the EventEmitter inheritance to support node > 0.5.2. (Luc Deschenaux)
* Add support for ignore type settings (Sysex, Timing, Active Sensing) on the input. (Luc Deschenaux)
* List supported node versions in the package.json.

### [0.3.0]
* Add support for virtual input and output ports.

### [0.2.0]
* Add Linux support to the build script.

### [0.1.0]
* Initial release.