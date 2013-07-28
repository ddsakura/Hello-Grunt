var name = 'bbb';
module.exports = function () {
    this.setName = function (n) {
        name = n;
    };
    this.getName = function () {
        return name;
    };
};


/*
exports.name = function () {
    console.log('hi');
}

exports.hi = 'abc';*/