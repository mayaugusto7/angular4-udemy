
require('chai').should();

describe('some feauture', () => {
    it('should pass', () => {
        'foo'.should.not.equal('bar');
    });

    it('should error', () => {
        (() => {
            throw new Error();
        }).should.throw();
    });
});