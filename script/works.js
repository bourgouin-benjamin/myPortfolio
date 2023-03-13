'use strict'

const Works = (function () {

    class Builder {
        constructor(work, outputArea) {
            this.work = work
            this.outputArea = outputArea
        }

        build(tagName, id = false) {
            const newElement = document.createElement(tagName)
            if (id) {
                newElement.setAttribute('id', id)
            }
            return newElement
        }
    }

    class WorkBuilder extends Builder {
        constructor(work, outputArea) {
            super(work, outputArea)
        }

        build() {
            const newWork = super.build('section', this.work.id)

            const workInfos = super.build('div')
            workInfos.setAttribute('class', 'workInfos')

            const textualInfos = super.build('div')
            textualInfos.setAttribute('class', 'textualInfos')
            const title = super.build('h2')
            title.innerHTML = this.work.name
            textualInfos.appendChild(title)

            const description = super.build('p')
            description.setAttribute('class', 'workDescription')
            description.innerHTML = this.work.description
            textualInfos.appendChild(description)
            workInfos.appendChild(textualInfos)

            const technologies = super.build('div')
            technologies.setAttribute('class', 'technologies')
            for (let i = 0; i < this.work.technologies.length; i++) {
                const imageContainer = super.build('div')
                imageContainer.setAttribute('class', 'techno')
                const tech = super.build('img')
                tech.setAttribute('src', this.work.technologies[i])
                imageContainer.appendChild(tech)
                technologies.appendChild(imageContainer)
            }
            workInfos.appendChild(technologies)

            newWork.appendChild(workInfos)

            const workImage = super.build('div')
            workImage.setAttribute('class', 'workImage')
            workImage.style.backgroundImage = "url(" + this.work.image + ")"
            newWork.appendChild(workImage)

            this.outputArea.appendChild(newWork)
        }
    }

    return {
        init: function (works) {
            const outputArea = works.area
            for (let i = 0; i < works.details.length; i++) {
                const builder = new WorkBuilder(works.details[i], outputArea)
                builder.build()
            }
        }
    }

})()