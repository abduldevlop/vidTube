export const addComment = async (req, res, next) => {
  try {
    res.json(" add comment");
  } catch (error) {
    next(error);
  }
};

export const deleteComment = async (req, res, next) => {
  try {
    res.json("deleteComment");
  } catch (error) {
    next(error);
  }
};

export const getComments = async (req, res, next) => {
  try {
    res.json("getComments");
  } catch (error) {
    next(error);
  }
};
