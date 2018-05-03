var should = require('should');
var EventEmitter = require('events').EventEmitter;
var Midi = require('../midi');

describe('midi.input', function() {
    it('should raise when not called with new', function() {
        (function() {
            Midi.input();
        }).should.throw('Use the new operator to create instances of this object.');
    });

    it('should be an emitter', function() {
        var input = new Midi.input();
        input.should.be.an.instanceOf(EventEmitter);
    });

    describe('.getPortCount', function() {
        var input = new Midi.input();
        it('should return an integer', function() {
            // I feel like having more than 255 ports indicates a problem.
            input.getPortCount().should.be.within(0, 255);
        });
    });

    describe('.getPortName', function() {
        var input = new Midi.input();

        it('requires an argument', function() {
            (function() {
                input.getPortName();
            }).should.throw('First argument must be an integer');
        });

        it('requires an integer', function() {
            (function() {
                input.getPortName('asdf');
            }).should.throw('First argument must be an integer');
        });

        it('returns an empty string for unknown port', function() {
            input.getPortName(999).should.eql('');
        });
    });

    describe('.openPort', function() {
        var input = new Midi.input();

        it('requires an argument', function() {
            (function() {
                input.openPort();
            }).should.throw('First argument must be an integer');
        });

        it('requires an integer', function() {
            (function() {
                input.openPort('asdf');
            }).should.throw('First argument must be an integer');
        });

        it('requires a valid port', function() {
            (function() {
                input.openPort(999);
            }).should.throw('Invalid MIDI port number');
        });
    });

    describe('.isPortOpen', function() {
        var input = new Midi.input();

        it('should return true if port open for openPort()', function() {
            input.openPort(0);
            input.isPortOpen().should.be.true();
        });

        it('should return false if port closed for openPort()', function() {
            input.closePort();
            input.isPortOpen().should.be.false();
        });
    });

    describe('.openVirtualPort', function() {
        var input = new Midi.input();

        it('requires an argument', function() {
            (function() {
                input.openVirtualPort();
            }).should.throw('First argument must be a string');
        });

        it('requires a string', function() {
            (function() {
                input.openVirtualPort(999);
            }).should.throw('First argument must be a string');
        });
    });

    describe('.closePort', function() {
        var input = new Midi.input();

        it('allows you to close a port that was not opened', function() {
            input.closePort();
        });
    });
});


describe('midi.output', function() {
    it('should raise when not called with new', function() {
        (function() {
            Midi.output();
        }).should.throw('Use the new operator to create instances of this object.');
    });

    it('should not be an emitter', function() {
        var output = new Midi.output();
        output.should.not.be.an.instanceOf(EventEmitter);
    });

    describe('.getPortCount', function() {
        var output = new Midi.output();
        it('should return an integer', function() {
            // I feel like having more than 255 ports indicates a problem.
            output.getPortCount().should.be.within(0, 255);
        });
    });

    describe('.getPortName', function() {
        var output = new Midi.output();

        it('requires an argument', function() {
            (function() {
                output.getPortName();
            }).should.throw('First argument must be an integer');
        });

        it('requires an integer', function() {
            (function() {
                output.getPortName('asdf');
            }).should.throw('First argument must be an integer');
        });

        it('returns an empty string for unknown port', function() {
            output.getPortName(999).should.eql('');
        });
    });

    describe('.openPort', function() {
        var output = new Midi.output();

        it('requires an argument', function() {
            (function() {
                output.openPort();
            }).should.throw('First argument must be an integer');
        });

        it('requires an integer', function() {
            (function() {
                output.openPort('asdf');
            }).should.throw('First argument must be an integer');
        });

        it('requires a valid port', function() {
            (function() {
                output.openPort(999);
            }).should.throw('Invalid MIDI port number');
        });
    });

    describe('.isPortOpen', function() {
        var output = new Midi.output();

        it('should return true if port open for openPort()', function() {
            output.openPort(0);
            output.isPortOpen().should.be.true();
        });

        it('should return false if port closed for openPort()', function() {
            output.closePort();
            output.isPortOpen().should.be.false();
        });
    });

    describe('.openVirtualPort', function() {
        var output = new Midi.output();

        it('requires an argument', function() {
            (function() {
                output.openVirtualPort();
            }).should.throw('First argument must be a string');
        });

        it('requires a string', function() {
            (function() {
                output.openVirtualPort(999);
            }).should.throw('First argument must be a string');
        });
    });

    describe('.closePort', function() {
        var output = new Midi.output();

        it('allows you to close a port that was not opened', function() {
            output.closePort();
        });
    });
});