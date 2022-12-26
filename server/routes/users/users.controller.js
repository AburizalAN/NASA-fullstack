const formidable = require('formidable');
const { users, setUsers, updateUser, deleteUser } = require('../../models/users.model');
const uuid = require('uuid');

exports.getAllUsers = (req, res) => {
  res.status(200).json(users);
}

exports.createNewUser = (req, res, next) => {
  const form = formidable({ multiples: true });
  const id = uuid.v1();

  form.parse(req, (err, fields, files) => {
    if (!err) {
      try {
        const data = {
          id,
          name: fields.name,
          email: fields.email,
        };
        setUsers(data);
        res.status(200).json({
          message: 'success',
          data,
        });
      } catch (err) {
        next(err)
      }
    } else {
      next(err)
    }
  })

  
}

exports.updateUser = (req, res, next) => {
  const { id } = req.params;
  const form = formidable({ multiples: true });

  form.parse(req, async (err, fields, files) => {
    if (!err) {
      try {
        const data = {
          id: id,
          name: fields.name,
          email: fields.email,
        };
        await updateUser(id, data)    
        res.status(200).json({
          message: 'success',
          data,
        });
      } catch (err) {
        next(err);
      }
    } else {
      next(err)
    }
  });
}

exports.deleteUser = (req, res, next) => {
  try {
    const { id } = req.params;
    deleteUser(id);
    res.status(200).json({
      message: "Success deleted user"
    })
  } catch (err) {
    next(err)
  }
  
}

