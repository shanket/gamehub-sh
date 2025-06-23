import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { HStack, Icon } from "@chakra-ui/react";

import { Fragment } from "react/jsx-runtime";

import type { Platform } from "../entities/Platform";
import type { IconType } from "react-icons";

interface PlatformIconListProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <Fragment>
      <HStack marginY={1}>
        {platforms.map((platform) => (
          <Icon
            key={platform.id}
            as={iconMap[platform.slug]}
            color="gray.500"
          />
        ))}
      </HStack>
    </Fragment>
  );
};

export default PlatformIconList;
