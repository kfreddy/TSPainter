import * as Events from "../Global/Events";
import { InputData, InputPositionData, InputMods } from "./InputData";
import { Vec2 } from "../Math/Vec2";
export class InputCapture {
    constructor(canvas) {
        this._mouseDown = false;
        this._onPointerDown = (ev) => {
            if (ev.button !== 0) {
                return;
            }
            this._mouseDown = true;
            const data = this.getInputData(ev, 0, 0);
            Events.broadcast(Events.ID.PointerDown, data);
        };
        this._onPointerMove = (ev) => {
            const data = this.getInputData(ev, 2, 0);
            Events.broadcast(Events.ID.PointerMove, data);
            if (this._mouseDown === true) {
                Events.broadcast(Events.ID.PointerDrag, data);
            }
        };
        this._onPointerUp = (ev) => {
            this._mouseDown = false;
            const data = this.getInputData(ev, 1, 0);
            Events.broadcast(Events.ID.PointerUp, data);
        };
        this._canvas = canvas;
        this.updateCanvasPosition();
        canvas.addEventListener("pointerdown", this._onPointerDown);
        document.body.addEventListener("pointermove", this._onPointerMove);
        document.body.addEventListener("pointerup", this._onPointerUp);
        canvas.addEventListener("resize", () => this.updateCanvasPosition());
        canvas.addEventListener("reposition", () => this.updateCanvasPosition());
        window.addEventListener("scroll", () => this.updateCanvasPosition());
    }
    getInputData(ev, inputType, src) {
        const x = ev.clientX - this._canvasPos.x;
        const y = ev.clientY - this._canvasPos.y;
        let positionData;
        if (ev.pointerType !== "mouse") {
            positionData = new InputPositionData(Vec2.create(x, y), ev.pressure, Vec2.create(ev.tiltX, ev.tiltY));
        }
        else {
            positionData = new InputPositionData(Vec2.create(x, y), 1, Vec2.create(0, 0));
        }
        const mods = new InputMods(ev.shiftKey, ev.altKey, ev.ctrlKey);
        return new InputData(src, ev.which, inputType, mods, positionData);
    }
    updateCanvasPosition() {
        const bounds = this._canvas.getBoundingClientRect();
        this._canvasPos = Vec2.create(bounds.left, bounds.top);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5wdXRDYXB0dXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0VuZ2luZS9JbnB1dC9JbnB1dENhcHR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sTUFBTSxrQkFBa0IsQ0FBQztBQUMzQyxPQUFPLEVBQWEsU0FBUyxFQUFlLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5RixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXBDLE1BQU07SUFNTCxZQUFZLE1BQXlCO1FBRjNCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUE0RG5CLG1CQUFjLEdBQUcsQ0FBQyxFQUFnQjtZQUMzQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLE1BQU0sQ0FBQztZQUNSLENBQUM7WUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxDQUFjLEVBQUUsQ0FBbUIsQ0FBQyxDQUFDO1lBQ3hFLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFBO1FBR1MsbUJBQWMsR0FBRyxDQUFDLEVBQWdCO1lBQzNDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLENBQWMsRUFBRSxDQUFtQixDQUFDLENBQUM7WUFDeEUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUU5QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLE1BQU0sQ0FBQyxT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