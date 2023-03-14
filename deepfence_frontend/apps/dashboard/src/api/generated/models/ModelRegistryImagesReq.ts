/* tslint:disable */
/* eslint-disable */
/**
 * Deepfence ThreatMapper
 * Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: community@deepfence.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ModelFetchWindow } from './ModelFetchWindow';
import {
    ModelFetchWindowFromJSON,
    ModelFetchWindowFromJSONTyped,
    ModelFetchWindowToJSON,
} from './ModelFetchWindow';

/**
 * 
 * @export
 * @interface ModelRegistryImagesReq
 */
export interface ModelRegistryImagesReq {
    /**
     * 
     * @type {string}
     * @memberof ModelRegistryImagesReq
     */
    registry_id: string;
    /**
     * 
     * @type {ModelFetchWindow}
     * @memberof ModelRegistryImagesReq
     */
    window?: ModelFetchWindow;
}

/**
 * Check if a given object implements the ModelRegistryImagesReq interface.
 */
export function instanceOfModelRegistryImagesReq(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "registry_id" in value;

    return isInstance;
}

export function ModelRegistryImagesReqFromJSON(json: any): ModelRegistryImagesReq {
    return ModelRegistryImagesReqFromJSONTyped(json, false);
}

export function ModelRegistryImagesReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelRegistryImagesReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'registry_id': json['registry_id'],
        'window': !exists(json, 'window') ? undefined : ModelFetchWindowFromJSON(json['window']),
    };
}

export function ModelRegistryImagesReqToJSON(value?: ModelRegistryImagesReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'registry_id': value.registry_id,
        'window': ModelFetchWindowToJSON(value.window),
    };
}

