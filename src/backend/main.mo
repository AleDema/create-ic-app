actor {
    public func greet(name : Text) : async Text {
        return "Hello, " # name # "!";
    };

    public query func getNumber() : async Nat {
        return 0;
    };
};
