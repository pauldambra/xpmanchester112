import { expect } from 'chai'

describe ('bowling', function() {
  it('scores two fives', function() {
    const score = bowl('55');
    expect(score).to.equal(10);
  })

  it('scores six and a three', function() {
    const score = bowl('63');
    expect(score).to.equal(9);
  })

  it('scores over two frames', function () {
    const score = bowl('63 63');
    expect(score).to.equal(18);
  })

})

const parse = (x) => x.split('').filter(s => s != ' ')

function bowl(x)
{
  return parse(x)
    .map(s => parseInt(s, 10))
    .reduce((l,r) => l + r, 0)
}
