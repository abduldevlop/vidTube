export const singUp = async (req, res, next) => {
  try {
    res.json("singup");
  } catch (error) {
    next(error);
  }
};

export const singin = async (req, res, next) => {
  try {
    res.json("singin");
  } catch (error) {
    next(error);
  }
};

export const googleAuth = async (req, res, next) => {
  try {
    res.json("google");
  } catch (error) {
    next(error);
  }
};
