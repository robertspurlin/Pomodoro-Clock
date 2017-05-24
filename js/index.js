var answer, lastNum = '';
var numChange, percent;
var input = " ";

if (input.length >= 14) {
    $('#value').html('ERR: length');
}

$('body').on('click', '.button', function(){
    if (this.value === 'C') {
        input = '';
        lastNum = '';
        $('#value').html('0');
        console.log('cleared');
    } 

    else if (input.length > 14) {
        $('#value').html("ERR: Length. Click 'C'");
    }

     else if (!isNaN(this.value)) {
        input += this.value;
        lastNum += this.value;
        $('#value').html(input);
        
    } else {

        if (this.value === '=' && !isNaN(lastNum)) {
            answer = eval(input);
            lastNum = answer;
            if (answer.toString().length > 14) {
                answer = answer.toString().slice(0, 14);
                $('#value').html(answer);
            } else {
                $('#value').html(answer);
            }
            input = answer;
            lastNum = answer;
            console.log(input + this.value + answer);
        }

        else if (isNaN(this.value) && this.value !== '%' && this.value !== '.' && this.value !== "+/-" && !isNaN(lastNum)) {
            input += ' ' + this.value +  ' ';
            lastNum = this.value;
            lastNum = lastNum.replace(/[*/+-]/, '');
            $('#value').html(input);
        }

        else if (this.value === '.' && !isNaN(lastNum) && lastNum.indexOf(this.value) < 0) {
            input += this.value;
            lastNum += this.value;
            $('#value').html(input);
        }
        else if (this.value === "+/-" && !isNaN(lastNum)) {
            if (Math.sign(lastNum) > 0) {
                numChange = lastNum * -1;
            } else {
                numChange = Math.abs(lastNum);
            }
            //vicki wuz here
            input = input.toString().replace(lastNum, numChange);
            lastNum = numChange;
            $('#value').html(input);
        
        } else if (this.value === "%" && !isNaN(lastNum)) {
            percent = lastNum / Math.pow(10, 2);
            if (percent.toString().length > 14) {
                percent = percent.toString().slice(0, 14);
            }
            input = input.toString().replace(lastNum, percent);
            lastNum = percent;
            $('#value').html(input);

        } else {
            $('#value').html("ERR: Other. Click 'C'");
            console.log("other error");
        }
    }    
});
