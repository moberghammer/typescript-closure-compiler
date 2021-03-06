﻿/// <reference path="parser.ts"/>

namespace ts {
    export declare const enum ModuleInstanceState {
        NonInstantiated = 0,
        Instantiated = 1,
        ConstEnumOnly = 2
    }

    export declare function bindSourceFile(file: SourceFile): void;
    export declare function getModuleInstanceState(node: Node): ModuleInstanceState;
    export declare function bindSourceFile(file: SourceFile, options: CompilerOptions);
}