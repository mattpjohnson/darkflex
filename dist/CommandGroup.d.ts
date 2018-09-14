import { Command, ICommand } from './Command';
export declare class CommandGroup {
    protected commands: Array<Command>;
    private filter;
    title: string;
    weight: number;
    constructor({ title, weight, isAvailable }: {
        title?: string | undefined;
        weight?: number | undefined;
        isAvailable?: undefined;
    });
    setFilter(filter: string): void;
    isAvailable(): boolean;
    isAvailableInContext(): boolean;
    registerCommand(command: ICommand): void;
    private readonly availableCommands;
    readonly filteredCommands: Command[];
}