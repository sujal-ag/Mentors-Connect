export default asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (error) {
        res.status(500 || error.code).json({
            message: error.message || 'Internal Server Error',
        });
    }
}