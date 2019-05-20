import { Container, Point } from "pixi.js";
import { FX, IEffectSequenceSettings, IEmitterSettings } from "./FX";
import { Node } from "./util/LinkedList";
export declare class BaseEffect extends Node {
    componentId: string;
    container: Container;
    exhausted: boolean;
    completed: boolean;
    name: string;
    endTime: number;
    protected _x: number;
    protected _y: number;
    protected _rotation: number;
    protected _alpha: number;
    protected _scale: Point;
    protected _time: number;
    protected _active: boolean;
    __fx: FX;
    __recycled: boolean;
    constructor(componentId: string);
    update(dt: number): void;
    recycle(): void;
    readonly active: boolean;
    scale: Point;
    alpha: number;
    rotation: number;
    y: number;
    x: number;
    __applySettings(value: IEffectSequenceSettings | IEmitterSettings): void;
}
