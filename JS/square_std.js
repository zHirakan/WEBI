

				function set_default(end_img, larg_bg, alt_bg){

					$(".bg_principal").css({
						"position"			 : "absolute",
						"left"				 : "0",
						"top"				 : "0",
						"width"				 : larg_bg,
						"height"			 : alt_bg,
						"box-shadow"		 : "inset 0px 0px 300px 4px rgba(0,0,0,.9)",
						"background-image"	 : "url("+end_img+")",
						"background-size"	 : "cover",
						"background-position": "0 0",
						"background-repeat"	 : "no-repeat",
						"z-index"			 : "0",
						});


				}

//function container_creator(obj.nome_classe, end_img, larg_bg, alt_bg, larg_obg, alt_obg, obj.left, obj.top){


				function container_creator(obj){

					$(obj.nome_classe).css({


						"position"			: "absolute",
						"box-shadow"		: "0px 0px 7px 3px rgba(0,0,0,0.2)",
						"border-radius"		: "5px",
						"overflow"			: "hidden",
						"width"				: obj.largura_obj,
						"height"			: obj.altura_obg,
						"left"				: obj.left,
						"top"				: obj.top,
						"padding"			: "10px",

					});

					var pos_after_left = "-"+obj.left;
					var pos_after_top  = "-"+obj.top;


					var nova_class = $(obj.nome_classe+" div").addClass(obj.nome_classe+"MLMP"+pos_after_top);


					$(nova_class).css({

						"position"			: "absolute",
						"display"			: "block",
						"width"				: obj.largura_pag,
						"height"			: obj.altura_pag,
						"background-image"	: "url("+obj.imagem+")",
						"box-shadow"			: "inset 0px 0px 300px 4px rgba(0,0,0,.9)",
						"background-size"		: "cover",
						"background-position"	: "0 0",
						"background-repeat"		: "no-repeat",
						"filter"				: "blur("+obj.blur+")",
						"z-index"				: "0",
						"left"					: pos_after_left,
						"top"					: pos_after_top,
						"box-shadow"			: "inset 0px 0px 200px 1px rgba(0,0,0,0.3)"
					});

					$(obj.nome_classe+" p").css({

						"position"			: "absolute",
						"z-index"			: "0",
						"top"				: "-10px",
						"left"				: "20px",
						"font-weight"		: "bold",
						"font-size"			: "22px",

					});
				}


	

