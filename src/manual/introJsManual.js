import 'intro.js/introjs.css';
import '../style/index.css';

import React, { Component } from 'react';
import { Steps, Hints } from 'intro.js-react';
import Manual from './manual';
import { getRoot, getRootManual } from '../getRoot/getRoot';

export default class IntroJsManual extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stepsEnabled: true,
            initialStep: 0,
            steps: [
                {
                    element: '.new-todo',
                    intro: 'Enter the work you need to complete.',
                },
                {
                    element: 'li.completed > .view',
                    intro: 'This is the work that you completed.',
                },
                {
                    element: 'li.uncompleted > .view',
                    intro: 'This is the work that you didn;t completed.',
                },
                {
                    element: 'li.completed > .view > .toggle',
                    intro: 'Click here to mark as done.',
                },
                {
                    element: 'li.completed > .view > .destroy',
                    intro: 'Click here to delete item.',
                },
                {
                    element: '.todo-count',
                    intro: 'Number of uncompleted work.',
                },
                {
                    element: '.filters',
                    intro: 'Filter to display work.',
                },
                {
                    element: '.filters>li:nth-child(1)',
                    intro: 'All of work.',
                },
                {
                    element: '.filters>li:nth-child(2)',
                    intro: 'Uncompleted work.',
                },
                {
                    element: '.filters>li:nth-child(3)',
                    intro: 'Completed work.',
                },
                {
                    element: '.clear-completed',
                    intro: 'Mark all work as uncompleted.',
                },
                {
                    element: '.toggle-all + label',
                    intro: 'Mark all work as completed.',
                },
                {
                    element: '.main',
                    intro: 'Double click in item to edit.',
                },
            ],
            hintsEnabled: true,
            hints: [
                {
                    element: '.hello',
                    hint: 'Hello hint',
                    hintPosition: 'middle-right',
                },
            ],
        };
    }

    onExit = () => {
        getRootManual.style.display = 'none';
        getRoot.style.display = 'block';
        this.setState(() => ({ stepsEnabled: false }));
    };

    toggleSteps = () => {
        this.setState((prevState) => ({ stepsEnabled: !prevState.stepsEnabled }));
    };

    render() {
        const { stepsEnabled, steps, initialStep, hintsEnabled, hints } = this.state;

        return (
            <>
                <Steps enabled={stepsEnabled} steps={steps} initialStep={initialStep} onExit={this.onExit} />
                <Hints enabled={hintsEnabled} hints={hints} />

                <Manual />
            </>
        );
    }
}
