const moment = require("moment")

"use strict"

const branchNameFromId = require("../utils/branchNameFromId")

module.exports = (sequelize, Sequelize) => {
    var Enquiry = sequelize.define("Enquiry", {

        // Virtual columns
        branchName: {
            type: Sequelize.VIRTUAL,
            get: function () {
                return branchNameFromId(this.getDataValue('branchId'))
            }
        },
        waitingTime: {
            type: Sequelize.VIRTUAL,
            get: function () {
                try {
                    return  moment(this.getDataValue('booking').startTime).diff(moment(), 'days')
                } catch(e) {
                    return false
                }
            }
        },

        firstName: Sequelize.STRING,
        lastName: Sequelize.STRING,
        email: Sequelize.STRING,
        phone: Sequelize.STRING,
        accessibilityRequirements: Sequelize.TEXT,

        applicationTime: Sequelize.DATE,
        ip: Sequelize.STRING,

        role: Sequelize.STRING,
        branchId: Sequelize.STRING,
        booking: Sequelize.JSON,
        bookingDate: Sequelize.DATE,

        contactAboutPeopleInNeed: Sequelize.BOOLEAN,
        contactAboutFundraising: Sequelize.BOOLEAN,
        contactByEmail: Sequelize.BOOLEAN,
        contactBySms: Sequelize.BOOLEAN,
        contactByPhone: Sequelize.BOOLEAN,

        gender: Sequelize.STRING,
        ageRange: Sequelize.STRING,
        ethnicBackground: Sequelize.STRING,

        enquiryId: Sequelize.STRING,

        sentMailReminder: Sequelize.BOOLEAN,
        sentSmsReminder: Sequelize.BOOLEAN

    }, {})
    // Enquiry.associate = function(models) {
    //     // associations can be defined here
    // }
    return Enquiry
}