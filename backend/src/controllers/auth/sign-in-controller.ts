import {prisma} from "../../utils/prisma";

export const SignIn = async (req: Request, res: Response) => {
  const {email, password} = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) return res.send({message: "user not found"});

    return res.send({
      success: true,
      message: response,
    });
  } catch (error) {
    return res.send(error);
  }
};
