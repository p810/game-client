import 'mocha';
import { expect } from 'chai';
import { BaseEmitter } from '../src/Event';

describe('BaseEmitter', () => {
    const emitter = new BaseEmitter();
    const callback = (): string => 'Hello world!';

    it('should create an event', () => {
        let result = emitter.create('test');

        expect(result).to.be.true;
    });

    it('should have the event', () => {
        let result = emitter.has('test');

        expect(result).to.be.true;
    });

    it('should register a callback', () => {
        let result = emitter.on('test', callback);

        expect(result).to.equal(0);
    });

    it('should return an array of callbacks', () => {
        let list = emitter.get('test');

        expect(list).to.be.an('array').that.includes(callback);
    });

    it('should de-register the event', () => {
        let result = emitter.off('test', 0);

        expect(result).to.be.true;
    });

    it('should still have the event index', () => {
        let result = emitter.has('test');

        expect(result).to.be.true;
    });

    it('should remove the event index', () => {
        let result = emitter.off('test');

        expect(result).to.be.true;
    });
});