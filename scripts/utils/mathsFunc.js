module.exports = {
    
    divi : function (a, b){
        let result = a / b; 
        return result;
    },
    add : function (a, b){
        let result = a + b; 
        return result;
    },
    avg : function (arr){
        let sum = this.add(arr[0], arr[1]);
        let result = this.divi(sum, arr.length);

        return result;
    }
}