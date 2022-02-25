<html>
<head>
<style>
	.btn-info.focus,
	.btn-info:focus {
	 color:#fff;
	 background-color:#1B3E45 !important;
	 border-color:#1B3E45 !important;
	}
	.btn-info:hover {
	 color:#fff;
	 background-color:#1B3E45 !important;
	 border-color:#1B3E45 !important;
	 opacity: 0.6;
	}
	.btn-info.active,
	.btn-info:active,
	.open>.dropdown-toggle.btn-info {
	 color:#fff;
	 background-color:#1B3E45 !important;
	 border-color:#1B3E45 !important;
	}
	#_alert_container{
	 background-color: #FFFFFF;
	 border: #FFFFFF;
	 color: #ff1923;
	 font-weight: 700;	 
	}
	input[type=submit] {
		font-size: 16px; 
		text-transform: uppercase;
		width: 100%;
		background-color: #1b3e45;
		border-color: #1b3e45;
		border-radius: 0
	}
	#_card_number_label, #_expiry_label, #_cvv_label{
		border:0
	}

</style>
</head>
<body>
	<div class="m-template">
		<div class="m-template__body">
			<div class="container-fluid text-center"
				style="line-height: 2.5em; background-color: #020202; color:#FFFFFF; font-size: 12px; font-weight: 600">
				</div>
			<div class="container-fluid" style="margin-top: 1%">
				<div class="col-sm-4 col-sm-offset-4 text-center hidden-xs">
					
				</div>
				<div class="col-xs-4 col-xs-offset-4 text-center visible-xs">
					
				</div>
				<span class="text-right col-xs-4 col-sm-2 col-sm-offset-2"
					style="padding-right: 0px;">
					<div>
						
							
							</strong> <strong class="hidden-sm hidden-md hidden-lg"
							style="font-size: 0.85em; vertical-align: -2px;"> </strong>
					</div>
				</span>
			</div>
			<hr style="margin-top: 1em;">
			<div class="hidden-xs text-center">
				
			</div>
			<div class="visible-xs text-center">
			
			</div>
			<div
				class="m-trx container-fluid col-xs-8 col-xs-offset-2 col-sm-8 col-sm-offset-2 text-center"
				style="margin-top: 3%">
				<div class="m-trx__amt amount">
					<p id="amount" style="font-size: 16px;"></p>
				</div>
				<div class="m-trx__meta details">
					<p id="organisation_name"></p>
				</div>
			</div>
			<div
				class="m-payment__form col-xs-12 col-sm-6 col-sm-offset-3 text-center">
				<form id="payment_fieldset" method="POST"></form>
				<div id="jwt"></div>
			</div>
		</div>
	</div>
</body>
</html>
