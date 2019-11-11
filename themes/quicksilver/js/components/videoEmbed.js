class VideoEmbed {
    constructor(url, options = {}) {
        this.video = this.parseURL(url);
        this.options = Object.assign({}, {
            attributes: [`frameborder="0"`, `allow="autoplay; encrypted-media"`, `allowfullscreen`, `mozallowfullscreen`, `webkitallowfullscreen`,],
            modestbranding: 1, autoplay: 1, rel: 0,
        }, options);
    }

    parseURL(url) {
        url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
        return { type: (RegExp.$3.indexOf('youtu') > -1) ? 'youtube' : 'vimeo', id: RegExp.$6 };
    }

    render() {
        let src = (this.video.type === 'youtube') ? `https://www.youtube.com/embed/${this.video.id}?` : `https://player.vimeo.com/video/${this.video.id}?`;
        Object.keys(this.options).forEach((item) => { if (typeof this.options[item] !== 'object') src += `${item}=${this.options[item]}&` });
        return `<iframe class="js-${this.video.type}-embed" src = "${src}" ${this.options.attributes.join(' ')}> `;
    }

}

export default VideoEmbed;

// let videoEmbed = new Embed('https://www.youtube.com/watch?v=dbB-mICjkQM', { autoplay: 0 });

// $body.append(videoEmbed.render());