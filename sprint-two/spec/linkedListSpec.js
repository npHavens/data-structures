describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  it('should return a specified value at a given node', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    expect(linkedList.getNodeValueAt(3)).to.equal(6);
  });

  it('should return null for a node not in the list', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    expect(linkedList.getNodeValueAt(4)).to.equal(null);
  });

  it('should insert a node after a given point', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    linkedList.insertNodeAt(0, 2);
    expect(linkedList.getNodeValueAt(3)).to.equal(0);
  });

  it('should insert node at the end of the list if value is bigger than list', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    linkedList.insertNodeAt(0, 5);
    expect(linkedList.getNodeValueAt(4)).to.equal(0);
  });

  // add more tests here to test the functionality of linkedList
});
