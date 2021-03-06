<script type='text/javascript'>
	function notEmpty(elem){
		if(elem.value.length == 0){
			return false;
		}
		return true;
	}
	
	function isNumeric(elem){
		var numericExpression = /^[0-9]+\$/;
		if(elem.value.match(numericExpression)){
			return true;
		} else {
			return false;
		}
	}
	
	function isAlphabet(elem){
		var alphaExp = /^[a-zA-Z0-9\_ .-@]+\$/;
		if(elem.value.match(alphaExp)){
			return true;
		} else {
			return false;
		}
	}
	
	function isAlphanumeric(elem){
		var alphaExp = /^[a-zA-Z0-9\_ .-@]+\$/;
		if(elem.value.match(alphaExp)){
			return true;
		} else {
			return false;
		}
	}
	
	function isFloat(elem){
   		if(elem.value.indexOf(".") < 0){
     		return false;
   		} else {
      		if(parseFloat(elem.value)) {
              return true;
          	} else {
              return false;
          	}
   		}
	}
	
	function taskFormValidator() {
		var i=0;
		var myInputs = new Array();
		$tfi.taskOutputs:{ output | 
			myInputs[i] = document.getElementById("$output.name$");
			i++;
		}$
		
		var j=0;
		$tfi.taskOutputs:{ output | 
			$if(output.integerRefType)$
				if(notEmpty(myInputs[j]) && !isNumeric(myInputs[j])) {
					alert("Please enter valid $output.name$");
					myInputs[j].focus();
					return false;
				}
			$elseif(output.floatRefType)$
				if(notEmpty(myInputs[j]) && !isFloat(myInputs[j])) {
					alert("Please enter valid $output.name$");
					myInputs[j].focus();
					return false;
				}
			$else$
				if(notEmpty(myInputs[j]) && !isAlphanumeric(myInputs[j])) {
					alert("Please enter valid $output.name$");
					myInputs[j].focus();
					return false;
				}
			$endif$	
			j++;
		}$
		return true;
	}
</script>