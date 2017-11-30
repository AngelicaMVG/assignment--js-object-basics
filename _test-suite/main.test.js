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
describe("createListOfObjects()", function() {
  it("should be a function", function() {
    return expect(createListOfObjects).to.be.a("function");
  });
  describe("ninjaListOfObjects = createListOfObjects(realNinjas)", function() {
    it("should return object for typeof ninjaListOfObjects", function() {
      return expect(typeof ninjaListOfObjects[0]).to.equal("object");
    });
    it("should return Chuck for firstName of ninjaListOfObjects[0]", function() {
      return expect(ninjaListOfObjects[0].firstName).to.equal("Chuck");
    });
    it("should return Norris for lastName of ninjaListOfObjects[0]", function() {
      return expect(ninjaListOfObjects[0].lastName).to.equal("Norris");
    });
    it("should return Jackie for firstName of ninjaListOfObjects[1]", function() {
      return expect(ninjaListOfObjects[1].firstName).to.equal("Jackie");
    });
    it("should return Chan for lastName of ninjaListOfObjects[1]", function() {
      return expect(ninjaListOfObjects[1].lastName).to.equal("Chan");
    });
    it("should return Billy for firstName of ninjaListOfObjects[3]", function() {
      return expect(ninjaListOfObjects[3].firstName).to.equal("Billy");
    });
    it("should return Blanks for lastName of ninjaListOfObjects[3]", function() {
      return expect(ninjaListOfObjects[3].lastName).to.equal("Blanks");
    });
  });
  describe("sportStarsListOfObjects = createListOfObjects(realSportsStars)", function() {
    it("should return object for typeof sportStarsListOfObjects", function() {
      return expect(typeof sportStarsListOfObjects).to.equal("object");
    });
    it("should return Ricky for firstName of sportStarsListOfObjects[1]", function() {
      return expect(sportStarsListOfObjects[1].firstName).to.equal("Ricky");
    });
    it("should return Vaughn for lastName of sportStarsListOfObjects[1]", function() {
      return expect(sportStarsListOfObjects[1].lastName).to.equal("Vaughn");
    });
    it("should return Jesus for firstName of sportStarsListOfObjects[3]", function() {
      return expect(sportStarsListOfObjects[3].firstName).to.equal("Jesus");
    });
    it("should return Shuttlesworth for lastName of sportStarsListOfObjects[3]", function() {
      return expect(sportStarsListOfObjects[3].lastName).to.equal(
        "Shuttlesworth"
      );
    });
  });
});

describe("createCarRecord()", function() {
  it("should be a function", function() {
    return expect(createCarRecord).to.be.a("function");
  });
  it("should return object for typeof newCar1", function() {
    return expect(typeof newCar1).to.equal("object");
  });
  it("should return make = Ford and model = Pinto for newCar1", function() {
    return expect(newCar1.make && newCar1.model).to.equal("Ford" && "Pinto");
  });
  it("should return make = Pontiac and year = 2001 for newCar2", function() {
    return expect(newCar2.make && newCar2.year).to.equal("Pontiac" && 2001);
  });
  it("should return model = Wrangler and license = 8HPN02 for newCar3", function() {
    return expect(newCar3.model && newCar3.license).to.equal(
      "Wrangler" && "8HPN02"
    );
  });
  it("should return string for typeof newCar4", function() {
    return expect(typeof newCar4).to.equal("string");
  });
  it("should return 'new record must have make, model, year, and license values for newCar4' for newCar4", function() {
    return expect(newCar4).to.equal(
      "new record must have make, model, year, and license values"
    );
  });
  it("should return 'new record must have make, model, year, and license values for newCar5' for newCar5", function() {
    return expect(newCar5).to.equal(
      "new record must have make, model, year, and license values"
    );
  });
  it("should return string for typeof newCar6", function() {
    return expect(typeof newCar6).to.equal("string");
  });
  it("should return '1st, 2nd, and 4th arguments must be String' for newCar6", function() {
    return expect(newCar6).to.equal(
      "1st, 2nd, and 4th arguments must be String"
    );
  });
  it("should return '1st, 2nd, and 4th arguments must be String' for newCar7", function() {
    return expect(newCar7).to.equal(
      "1st, 2nd, and 4th arguments must be String"
    );
  });
  it("should return string for typeof newCar8", function() {
    return expect(typeof newCar8).to.equal("string");
  });
  it("should return '3rd argument must be a Number' for newCar8", function() {
    return expect(newCar8).to.equal("3rd argument must be a Number");
  });
});
