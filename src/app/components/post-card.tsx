"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import { IconHeart, IconMessageCircle, IconRepeat } from "@tabler/icons-react";

export function PostCard({
  userFullname,
  userName,
  avatarUrl,
  content,
}: {
  userFullname: string;
  userName: string;
  avatarUrl: string;
  content: string;
}) {
  return (
    <Card className="shadow-none bg-transparent border-b border-white/20 hover:bg-slate-800 cursor-pointer rounded-none transition">
      <CardHeader className="justify-between">
        <div className="flex gap-x-2">
          <Link href={`/${userName}`}>
            <Avatar radius="full" size="md" src={avatarUrl} />
          </Link>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {userFullname}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @{userName}
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-white">
        <p>{content}</p>
      </CardBody>
      <CardFooter className="gap-3">
        <IconMessageCircle className="h-4 w-4" />
        <IconHeart className="h-4 w-4" />
        <IconRepeat className="h-4 w-4" />
      </CardFooter>
    </Card>
  );
}
