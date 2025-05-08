import {Request, Response} from "express";
import {prisma} from "../utils/prisma";

export const CreateUser = async (req: Request, res: Response) => {
  const {name, email, password} = req.body;

  try {
    const response = await prisma.user.create({
      data: {
        name,
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

export const findUsers = async (req: Request, res: Response) => {
  try {
    const response = await prisma.user.findMany({});
    return res.send({
      success: true,
      message: response,
    });
  } catch (error) {
    return res.send(error);
  }
};

export const updateUserById = async (req: Request, res: Response) => {
  const {id} = req.params;
  const {name, email, password} = req.body;

  try {
    const response = await prisma.user.update({
      where: {id: Number(id)},
      data: {email, password, name},
    });
    return res.send({
      success: true,
      message: response,
    });
  } catch (error) {
    return res.send(error);
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
  const {id} = req.params;
  try {
    const response = await prisma.user.delete({
      where: {id: Number(id)},
    });
    return res.send({
      success: true,
      message: response,
    });
  } catch (error) {
    return res.send(error);
  }
};
