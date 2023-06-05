var evaluate = function(s, knowledge) {
    const hash = knowledge.reduce((res, [key,value]) => {
        res[key] = value;
        return res;
    }, {});
    
    // { name: 'bob', age: 'two' }

    const res = [];
    let j = 0;

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '(':
                res.push(s.substr(j, i - j));
                j = i + 1;
                break;
            case ')':
                const key = s.substr(j, i - j);
                res.push(hash[key] || '?');
                j = i + 1;
                break;
        }
        console.log(res)
    }
    console.log(j)
    if (j < s.length) {
        res.push(s.substr(j));
    }
    
    return res.join('');
};

console.log(evaluate("(name)is(age)yearsold", [["name","bob"],["age","two"]]))