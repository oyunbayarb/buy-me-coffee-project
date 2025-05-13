import {Request, Response} from "express";
import {prisma} from "../../utils/prisma";
import bcrypt from "bcrypt";

const CheckUser = async (req: Request, res: Response) => {
  const {username} = req.body;
  try {
    const user = await prisma.user.findUnique({where: {username: username}});
    if (user) {
      return res.send({message: "username already taken"});
    }
  } catch (error) {}
};

export const SignUp = async (req: Request, res: Response) => {
  const {username, email, password} = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    const response = await prisma.user.create({
      data: {
        username,
        password,
        email,
      },
    });
    return res.send({
      success: true,
      message: response,
    });
  } catch (error) {
    return res.send(error);
  }
};
