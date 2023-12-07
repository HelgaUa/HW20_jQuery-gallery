class Gallery {
    constructor(galleryItems, modalWrapper) {
        this.galleryItems = galleryItems;
        this.modalWrapper = modalWrapper;
        this.modalContent = this.modalWrapper.find('.js--modal__content');
        this.modalNext = this.modalWrapper.find('.js--modal__next');
        this.modalPrev = this.modalWrapper.find('.js--modal__prev');
        this.currentIndex = undefined;
        this.init();
    }

    init() {
        this.galleryItems.on('click', (event) => {
            this.currentIndex = this.galleryItems.index($(event.currentTarget));
            this.toggleModal();
            this.showImage();
        });
        this.modalWrapper.find('.js--modal__close').on('click', () => this.toggleModal());
        this.modalNext.on('click', () => this.nextItem());
        this.modalPrev.on('click', () => this.prevItem());
    }

    showImage() {
        this.modalContent.html(`<img src="./img/${this.currentIndex + 1}.jpg" alt="">`);
    }

    toggleModal() {
        this.modalWrapper.toggleClass('active');
    }

    nextItem() {
        this.currentIndex++;
        this.showImage();
        this.showOrHideButton();
    }
    prevItem() {
        this.currentIndex--;
        this.showImage();
        this.showOrHideButton()
    }

    showOrHideButton() {
        this.currentIndex === 0 ? this.modalPrev.hide() : this.modalPrev.show();
        this.currentIndex === this.galleryItems.length -1 ? this.modalNext.hide() : this.modalNext.show();
    }
}
let courseGallery = new Gallery($('.js--gal_item'), $('.js--modal'));