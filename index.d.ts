import { Client } from "discord.js";

export type RamTypes = 'MB' | 'GB'

export class JDaniel_Util {
    constructor();
    /**
    * Generate a random number.
    */
    public random(min: number, max: number): number;
    /**
    * Get one or more random items from an array.
    */
    public randomText(arr: any[], length?: number): any[];
    /**
    * Generate a random string with custom length.
    */
    public randomString(length: number): string;
    /**
    * Get ram usage in MB or GB.
    */
    public ramUsage(decimals?: number, type: RamTypes): string;
    /**
    * Get cpu usage.
    */
    public cpuUsage(decimals?: number); string;
    /**
    * Load commands in a folder and add a commands property to client class.
    */
    public loadCommands(client: Client, path: string): void;
} as default;
