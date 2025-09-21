import express from 'express';
import {
  loginUser,
  registerUser,
  getProfile,
  updateProfile,
  bookAppointment,
  listAppointment,
  cancelAppointment,
  paymentPaystack,
  verifyPaystack,
  paymentStripe,
  verifyStripe
} from '../controllers/userController.js';
import upload from '../middleware/multer.js';
import authUser from '../middleware/authUser.js';

const userRouter = express.Router();

// Auth
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

// Profile
userRouter.get("/get-profile", authUser, getProfile);
userRouter.post("/update-profile", upload.single('image'), authUser, updateProfile);

// Appointments
userRouter.post("/book-appointment", authUser, bookAppointment);
userRouter.get("/appointments", authUser, listAppointment);
userRouter.post("/cancel-appointment", authUser, cancelAppointment);

// Payments - Paystack
userRouter.post("/payment-paystack", authUser, paymentPaystack);
userRouter.post("/verifyPaystack", authUser, verifyPaystack);

// Payments - Stripe
userRouter.post("/payment-stripe", authUser, paymentStripe);
userRouter.post("/verifyStripe", authUser, verifyStripe);

export default userRouter;
