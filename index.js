
// receivesAFunction

function receivesAFunction(callback) {
    return callback();
}

// returnsANamedFunction

function returnsANamedFunction() {
    return returnsANamedFunction;
}

// returnsAnAnonymousFunction 

function returnsAnAnonymousFunction(){
    return function() {};
}