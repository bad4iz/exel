/**
 * Created by bad4iz on 20.03.2017.
 */
/**
 * <div class="input-group-btn">
 <button type="button" class="btn btn-danger"><i class="fa fa-pencil"></i></button>
 <button type="button" class="btn btn-warning"><i class="fa fa-plus"></i></button>
 <button type="button" class="btn btn-success"><i class="fa fa-refresh"></i></button>
 </div>

 */

/**
 * кнопка
 *
 *
 *
 */

export class Button {
    /**
     * класс
     * @param cl class
     */
    constructor(cl) {
        this.icon = document.createElement('i');
        this.button = document.createElement('button');
        this.class = cl;
        this.button.type = 'button';
        this.onclick = function () {
            console.log("кнопка по умолчанию");
        };
        this.button.appendChild(this.icon);
    }
    /**
     * обработчик нажатия
     */
    set onclick(fn) {
        if (typeof fn === 'function') {
            this.button.onclick =fn;
        }
    }

    /**
     * иконка кнопки
     * @param iconClass
     */
    set iconClass(iconClass) {
        this.icon.className = iconClass;
    }


    /**
     * задает класс кнопки
     * @param cl
     */
    set class(cl) {
        this.button.className = cl;
    }

    /**
     * отдает себя
     * @returns {Element|*}
     */
    getThis() {
        return this.button;
    }
}