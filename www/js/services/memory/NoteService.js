var NoteService = function() {

    this.initialize = function() {
        // No Initialization required
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.findById = function(id) {
        var deferred = $.Deferred();
        var note = null;
        var l = notes.length;
        for (var i=0; i < l; i++) {
            if (notes[i].id == id) {
                note = notes[i];
                break;
            }
        }
        deferred.resolve(note);
        return deferred.promise();
    }

    var notes = [
        {
          "id": "part-time-seattle",
          "title":"Part Time in Seattle",
          "explanation": ["If you work more than two hours in Seattle during a two-week period, then Seattle’s minimum wage applies to you, and you should be paid Seattle’s minimum wage for those hours.", "You can use this tool to figure out the minimum wage for your Seattle hours; hours worked outside the city should be paid the state minimum wage of $9.47 per hour.", "(Note that hours you spend traveling through Seattle, with no work-related stops in the city, don’t count toward that total.)"],
          "ordinance": {
            "section": "A",
            "href": "https://www.municode.com/library/wa/seattle/codes/municipal_code?nodeId=TIT14HURI_CH14.19MIWAMICORAEMPEWOSE_14.19.020EMSEEMSCDE",
            "text": ["Employees should receive the minimum wage for each hour worked within the geographic boundaries of Seattle, provided that an employee who performs work in Seattle on an occasional basis should receive the appropriate minimum wage in a two-week period only if the employee performs more than two hours of work for an employer within Seattle during that two-week period.","Time spent in Seattle solely for the purpose of travelling through Seattle from a point of origin outside Seattle to a destination outside Seattle, with no employment-related or commercial stops in Seattle except for refueling or the employee's personal meals or errands, are not included."]
          },
          "next":"#question/number-employees",
          "skip": function(answers) {
            return false
          }
        },
        {
          "id": "minimum-compensation",
          "title":"Minimum Compensation",
          "explanation": ["For example, let's say that your minimum wage is: $10/hr.",
            "Your employer has to make sure that your tips and/or their contribution to your health care benefits add up to the minimum compensation of the minimum wage if these things are not provided: $11/hr in total.",
            "This consideration of tips and benefits is only temporary and will phase out over the next few years as wages keep rising."],
          "ordinance": {
            "section":"B",
            "href": "https://www.municode.com/library/wa/seattle/codes/municipal_code?nodeId=TIT14HURI_CH14.19MIWAMICORAEMPEWOSE_14.19.050HOMICOCH2EM",
            "text":["Employers can meet the applicable hourly minimum compensation requirement through wages (including applicable commissions, piece-rate, and bonuses), tips and money paid by an employer towards an individual employee's medical benefits plan, provided that the Schedule 2 employer also meets the applicable hourly minimum wage requirements."]
          },
          "next":"#results",
          "skip": function(answers) {
            return answers["health-insurance"] != "yes" && answers["tips"] != "yes";
          }
        },
    ];

}

