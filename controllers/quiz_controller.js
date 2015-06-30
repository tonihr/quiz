//GET /quizes/question
exports.question = function(req,res){
	res.render('quizes/question',{title:'Quiz',question:'Capital de Italia'});
};

//GET /quizes/answer
exports.answer = function(req,res){
	if (req.query.answer==='Roma'){
		res.render('quizes/answer',{title:'Quiz',answer:'Correcto'});
	}else{
		res.render('quizes/answer',{title:'Quiz',answer:'Incorecto'});
	}
};