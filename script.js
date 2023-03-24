/*                 CALCULATOR OPERATION LOGIC
                 --------------------------------
*/

const _output = document.getElementById('out-put');                 //  Let the out-put equals to a variable called "_output"

function display(num) {                                  // function that display item to screen
    _output.value += num
}

function Clear() {                                                   // function that clears item to screen
    _output.value = "";
}

function del() {                                                    // function that delet item to amongst
    _output.value = _output.value.slice(0, -1)
}

function Calculate() {                                              // Function to calculate or evalute the operation.
    try {
        _output.value = eval(_output.value)
    } catch (error) {
        alert('Insert a correct value')
    }
}

