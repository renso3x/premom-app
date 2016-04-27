(function() {
	angular
		.module('app.services', [
			'app.auth.service',
			'app.checklist.service',
			'app.doctor.service',
			'app.facility.service',
			'app.guide.service',
			'app.message.services',
			'app.nurse.service',
			'app.question.service',
			'app.user.serivce',
			'app.video.service'
		]);
})();