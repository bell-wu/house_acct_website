const userModel = require('../models/user.model');

class UsersController {

    static async updateOwed(thisId, amountOwed) {
            console.log(thisId);
            await userModel.find().where('id').gte(thisId)
            .then(async users => {
                let user = users[0];
                
                if (user == null) {
                    return;
                }
                user.owed = user.owed + amountOwed;
                console.log(user);
                await user.save();
            })
            .catch(err => console.log(err));
            // await userModel.find().where('id').gte(thisId).exec(user => {
            //     console.log(user);
            //     if (user == null) {
            //         return;
            //     }
            //     user.owed = user.owed + amountOwed;
        
            //     user.save();
            //   });


            // .then(user => {
            //     user.owed = user.owed + amountOwed;
        
            //     user.save();
            //   });
        }
    }

module.exports = UsersController
