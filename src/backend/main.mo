import Array "mo:core/Array";
import Order "mo:core/Order";
import Int "mo:core/Int";

actor {
  // Types
  type Ship = {
    name : Text;
    shipType : Text;
    description : Text;
    imageUrl : Text;
  };

  type NewsArticle = {
    title : Text;
    date : Int;
    summary : Text;
    imageUrl : Text;
  };

  type Career = {
    title : Text;
    category : Text;
    description : Text;
  };

  module Article {
    public func compare(article1 : NewsArticle, article2 : NewsArticle) : Order.Order {
      Int.compare(article2.date, article1.date);
    };
  };

  // Seed data
  let ships : [Ship] = [
    {
      name = "INS Vikramaditya";
      shipType = "Aircraft Carrier";
      description = "The INS Vikramaditya is a modified Kiev-class aircraft carrier and the flagship of the Indian Navy.";
      imageUrl = "https://example.com/vikramaditya.jpg";
    },
    {
      name = "INS Kolkata";
      shipType = "Destroyer";
      description = "The INS Kolkata is the lead ship of the Kolkata-class stealth guided-missile destroyers.";
      imageUrl = "https://example.com/kolkata.jpg";
    },
  ];

  let newsArticles : [NewsArticle] = [
    {
      title = "Navy conducts joint exercise";
      date = 1_682_112_000_000_000_000;
      summary = "Indian Navy conducts joint exercise with US Navy in Bay of Bengal.";
      imageUrl = "https://example.com/exercise.jpg";
    },
    {
      title = "New submarine commissioned";
      date = 1_681_725_600_000_000_000;
      summary = "INS Kalvari, the first Scorpene-class submarine, commissioned into Indian Navy.";
      imageUrl = "https://example.com/submarine.jpg";
    },
  ];

  let careers : [Career] = [
    {
      title = "Naval Officer";
      category = "Officer";
      description = "Join the Indian Navy as a commissioned officer.";
    },
    {
      title = "Sailor";
      category = "Enlisted";
      description = "Serve as a sailor in various technical and non-technical trades.";
    },
  ];

  // Query functions
  public query ({ caller }) func getAllShips() : async [Ship] {
    ships;
  };

  public query ({ caller }) func getAllNews() : async [NewsArticle] {
    newsArticles.sort();
  };

  public query ({ caller }) func getAllCareers() : async [Career] {
    careers;
  };
};
