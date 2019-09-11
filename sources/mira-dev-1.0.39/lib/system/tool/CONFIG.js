module.exports = function () {
    /* CONFIG */
    return  { 
        cryptkey: require('crypto').createHash('sha256').update('bin').digest(), 
        signature: "E4WXqn_IotaTPN6E", 
        alg: 'aes-256-ctr', 
        header: 'JQL1', 
        ext: ".jsq" 
    };
};