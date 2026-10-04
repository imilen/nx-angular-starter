import '@angular/compiler';

import { setProjectAnnotations } from '@analogjs/storybook-angular/testing';
import * as a11y from '@storybook/addon-a11y/preview';
import { beforeAll } from 'vitest';
import * as projectAnnotations from './preview';

const annotations = setProjectAnnotations([a11y, projectAnnotations]);

beforeAll(annotations.beforeAll);
