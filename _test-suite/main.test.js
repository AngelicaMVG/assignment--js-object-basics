var expect = chai.expect;

describe("createHtmlElement()", function() {
  it("should be a function", function() {
    return expect(createHtmlElement).to.be.a("function");
  });
  it('should return <p class="featured-section">This is so freaking cool!</p>', function() {
    return expect(htmlString1).to.equal(
      '<p class="featured-section">This is so freaking cool!</p>'
    );
  });
  it('should return <h2 class="ui-card-title bg--inverse">Bill Brasky</h2>', function() {
    return expect(htmlString2).to.equal(
      '<h2 class="ui-card-title bg--inverse">Bill Brasky</h2>'
    );
  });
  it('should return <span class="highlight text-important">This is an important message.</span>', function() {
    return expect(htmlString3).to.equal(
      '<span class="highlight text-important">This is an important message.</span>'
    );
  });
});

describe("flipColor()", function() {
  before(function() {
    var tileObj2 = flipColor(tileObj);
    var tileObj3 = flipColor(tileObj2);
  });
  it("should be a function", function() {
    return expect(flipColor).to.be.a("function");
  });
  it("should return red for tileObj2.color ", function() {
    return expect(tileObj2.color).to.equal("red");
  });
  it("should return red for tileObj3.color", function() {
    return expect(tileObj3.color).to.equal("blue");
  });
});

describe("makeNamesObject()", function() {
  it("should be a function", function() {
    return expect(makeNamesObject).to.be.a("function");
  });
  it("should return Washington for greatMenObj.George ", function() {
    return expect(greatMenObj.George).to.equal("Washington");
  });
  it("should return Lincoln for greatMenObj['Abe'] ", function() {
    return expect(greatMenObj["Abe"]).to.equal("Lincoln");
  });
  it("should return West for greatMenObj.Kanye", function() {
    return expect(greatMenObj.Kanye).to.equal("West");
  });
  it("should return West for greatWomenObj.Rosa", function() {
    return expect(greatWomenObj.Rosa).to.equal("Parks");
  });
  it("should return West for greatWomenObj.Charlotte", function() {
    return expect(greatWomenObj.Charlotte).to.equal("Webb");
  });
});

describe("createNameObject()", function() {
  it("should be a function", function() {
    return expect(createNameObject).to.be.a("function");
  });
  describe('createNameObject("Benzo Lorenzo")', function() {
    it("should return Benzo for firstName", function() {
      return expect(nameObj1.firstName).to.equal("Benzo");
    });
    it("should return Lorenzo for lastName", function() {
      return expect(nameObj1.lastName).to.equal("Lorenzo");
    });
  });
  describe('createNameObject("Felipe Tortuga")', function() {
    it("should return Felipe for firstName", function() {
      return expect(nameObj2.firstName).to.equal("Felipe");
    });
    it("should return Tortuga for lastName", function() {
      return expect(nameObj2.lastName).to.equal("Tortuga");
    });
  });
  describe('createNameObject("Lupe Maria")', function() {
    it("should return Lupe for firstName", function() {
      return expect(nameObj3.firstName).to.equal("Lupe");
    });
    it("should return Maria for lastName", function() {
      return expect(nameObj3.lastName).to.equal("Maria");
    });
  });
});

describe("makeFullNamesList()", function() {
  it("should be a function", function() {
    return expect(makeFullNamesList).to.be.a("function");
  });
  describe("makeFullNamesList(customersList)", function() {
    it("should return string for typeof data", function() {
      return expect(typeof fullNamesList1[0]).to.equal("string");
    });
    it("should return Mr. Joe Blogs for the first list item", function() {
      return expect(fullNamesList1[0]).to.equal("Mr. Joe Blogs");
    });
    it("should return Ms. Kate Smith for the third list item", function() {
      return expect(fullNamesList1[1]).to.equal("Ms. Kate Smith");
    });
  });
  describe("makeFullNamesList(moreCustomersList)", function() {
    it("should return string for typeof data", function() {
      return expect(typeof moreNamesList[1]).to.equal("string");
    });
    it("should return Ms. Ruby Scooby for the first list item", function() {
      return expect(moreNamesList[0]).to.equal("Ms. Ruby Scooby");
    });
    it("should return Mr. Dan Theman for the third list item", function() {
      return expect(moreNamesList[2]).to.equal("Mr. Dan Theman");
    });
  });
});
