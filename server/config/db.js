import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Conectado a MongoDB');
  } catch (err) {
    console.error('❌ Error de conexión:', err);
    process.exit(1);
  }
};