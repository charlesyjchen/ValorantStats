$( document ).ready(function() {
	$( ".combatScorePerUsername" ).hide();
	$( ".winRatioPerUsername" ).hide();
	$( "#horizontalAxis" ).change(function() {
		var selectedHorAxis = $( "#horizontalAxis" ).val();
		var selectedVerAxis = $( "#verticalAxis" ).val();
		if (selectedHorAxis != "" && selectedVerAxis !=""){
			if (selectedVerAxis == "combatScorePicker"){
				$( ".combatScorePerUsername" ).show();
				$( ".winRatioPerUsername" ).hide();
			}
			else{
				$( ".winRatioPerUsername" ).show();
				$( ".combatScorePerUsername" ).hide();
			}
		}
		else{
			$( ".combatScorePerUsername" ).hide();
			$( ".winRatioPerUsername" ).hide();
		}
	});
	$( "#verticalAxis" ).change(function() {
		var selectedHorAxis = $( "#horizontalAxis" ).val();
		var selectedVerAxis = $( "#verticalAxis" ).val();
		if (selectedHorAxis != "" && selectedVerAxis !=""){
			if (selectedVerAxis == "combatScorePicker"){
				$( ".combatScorePerUsername" ).show();
				$( ".winRatioPerUsername" ).hide();
			}
			else{
				$( ".winRatioPerUsername" ).show();
				$( ".combatScorePerUsername" ).hide();
			}
		}
		else{
			$( ".combatScorePerUsername" ).hide();
			$( ".winRatioPerUsername" ).hide();
		}
	});
	
});