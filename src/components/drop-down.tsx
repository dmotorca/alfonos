'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

export function DropDown() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button className="bg-black">
          <img src="DropDown.svg" alt="DropDown" />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="bg-black border-none shadow-none">
        <DrawerClose asChild>
          <Button className="absolute top-4 right-4">
            <img src="Close.svg" alt="Close Dropdown Menu" />
          </Button>
        </DrawerClose>
        <DrawerTitle className="text-white">Menu</DrawerTitle>
      </DrawerContent>
    </Drawer>
  );
}
