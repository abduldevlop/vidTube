export const updateUser = async (req, res, next) => {
  try {
    res.json("update user");
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    res.json("delete user");
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    res.json("get user");
  } catch (error) {
    next(error);
  }
};

export const subscibChannel = async (req, res, next) => {
  try {
    res.json("sub channel");
  } catch (error) {
    next(error);
  }
};
export const unsubscibChannel = async (req, res, next) => {
  try {
    res.json("ubsub channel");
  } catch (error) {
    next(error);
  }
};

export const likeVideo = async (req, res, next) => {
  try {
    res.json("like video");
  } catch (error) {
    next(error);
  }
};

export const dislike = async (req, res, next) => {
  try {
    res.json("dislike");
  } catch (error) {
    next(error);
  }
};
